"use client"
import { useRouter } from 'next/navigation';
import React, { MouseEventHandler, useRef } from 'react'
import styles from "./modal.module.css"

const Modal = ({children}: {children: React.ReactNode}) => {
  const overlay = useRef(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      className={styles.modal}
      ref={overlay} 
      onClick={close}
    >
      <section>
        {children}
      </section>
    </div>
  )
}

export default Modal