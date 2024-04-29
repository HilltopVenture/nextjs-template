import React, { useState, useRef, useEffect, LegacyRef } from "react";
import clsx from "@/libs/clsx";
interface CollapseProps {
  children: ({
    ref,
  }: {
    ref: LegacyRef<HTMLDivElement> | undefined;
  }) => React.ReactNode;
  forceShow?: boolean;
  listening?: boolean;
  Header: ({
    show,
    onClick,
  }: {
    show: boolean;
    onClick: () => void;
  }) => React.ReactNode;
  refreshKeys?: any[];
  className?: string;
}
function Collapse({
  children,
  forceShow = false,
  listening = false,
  Header,
  refreshKeys = [],
  className,
}: CollapseProps) {
  const [show, setShow] = useState(forceShow);
  const [height, setHeight] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  let style: React.CSSProperties = { visibility: "hidden" };

  useEffect(() => {
    if (ref.current && ref.current.clientHeight > 0) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref.current?.clientHeight]);

  useEffect(() => {
    setTimeout(() => {
      setShow((prevShow) => !prevShow);
    }, 100);
  }, [refreshKeys]);

  if (!show && height !== null) {
    style.height = 0;
  }
  if (show && height && height > 0) {
    style.height = height;
    style.visibility = "visible";
  }

  useEffect(() => {
    if (listening && show !== forceShow) {
      setShow(forceShow);
    }
  }, [listening, show, forceShow]);

  return (
    <>
      {Header({ show, onClick: () => setShow(!show) })}
      <div
        style={style}
        className={clsx(
          {
            "overflow-hidden transition-all duration-300": true,
          },
          className
        )}
      >
        {children({ ref })}
      </div>
    </>
  );
}

export default Collapse;
