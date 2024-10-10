'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './image-modal.module.css';

const EnlargeableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalIsOpen(false);
      }
    };

    if (modalIsOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        onClick={() => setModalIsOpen(true)}
        width={672}
        height={378}
        style={{ cursor: 'pointer' }}
      />

      {modalIsOpen && (
        <div id="myModal" className={style.modal}>
          <span className={style.close} onClick={() => setModalIsOpen(false)}>
            &times;
          </span>
          <Image
            src={src}
            alt={alt}
            className={style.modalContent}
            width={1600}
            height={900}
          />
          <div id="caption">Caption</div>
        </div>
      )}
    </>
  );
};

export default EnlargeableImage;
