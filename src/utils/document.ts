import { useState } from 'react';

type Props = {
  name: string;
  adress: string;
  email: string;
  uf: string;
  city: string;
  date: string;
};

export const htmlContent = (
  name: string,
  adress: string,
  email: string,
  uf: string,
  city: string,
  date: string
) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <title>Declaração Creative INC</title>
      <style>
        html {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        body {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          break-inside: avoid;
          font-family: 'Roboto Slab', serif;
          text-align: justify;
          text-justify: inter-word;
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          break-inside: avoid;
          font-family: 'Roboto Slab', serif;
          text-align: justify;
          text-justify: inter-word;
        }
        h1 {
          font-size: 40px;
          font-weight: 700;
        }
        p {
          font-weight: 400;
        }
        span {
          width: 150%;
          height: 1px;
          background-color: black;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <h1>DECLARAÇÃO</h1>
      <div>
        <p>
          Eu, <strong>${name}</strong>, com e-mail
          <strong>${email}</strong>, que reside em
          <strong>${adress}</strong>.
        </p>
        <p>
          Declaro que preenchi o formulário do desafio com objetivo de participar
          da seleção de vaga para Criative-Inc.
        </p>

        <p>Por ser a expressão da verdade, firmamos a presença da declaração.</p>
      </div>
      <div>
        <p>${city} - ${uf}, ${date}</p>

        <p>${name}</p>
        <span />
      </div>
      <div />
    </body>
  </html>
  `;
  return html;
};
