import React, { useState, useEffect } from 'react';

// Custom delay component
export default function Delay({ delay, children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return show ? children : null;
}