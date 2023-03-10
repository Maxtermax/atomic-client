import styled from "styled-components";
import logo from "@images/logo.png";

export const Container = styled.div`
  .header-container {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    width: 100%;
    position: fixed;
    z-index: 100;
    .header-content {
      max-width: 1440px;
      width: 1024px;
      min-width: $small;
      grid-area: 1/2;
      //background: red;
      display: grid;
      grid-template-columns: 0.2fr 1fr;
      padding-top: 20px;
      padding-bottom: 20px;
      position: relative;
      .toggle-options {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
        left: 5px;
        text-align: center;
        vertical-align: center;
        display: none;
        z-index: 1;
        i {
          color: white;
          font-size: 28px;
        }
      }
      .wrap-logo {
        width: 180px;
        height: 100px;
        background-image: url(${logo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 120px;
      }
      .option-selected {
        border: 1px solid white;
      }
      .wrap-options {
        display: grid;
        grid-template-columns: 0.4fr 1fr;
        .title {
          color: white;
          font-size: 60px;
          font-weight: bold;
          font-family: Raleway;
          padding: 0px;
          margin: 0px;
        }
        .subtitle {
          color: white;
          font-size: 30px;
          font-weight: 100;
          font-family: Open Sans;
          padding: 0px;
          margin: 0px;
          border-bottom: 5px solid transparent;
          display: inline;
          transition: all ease-in 0.25s;
          &:hover {
            border-bottom: 5px solid white;
          }
        }
        .col-nav {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          ul {
            list-style: none;
            padding: 0px;
            margin: 0px;
            margin-top: 50px;
            li {
              height: 40px;
              display: block;
              text-align: center;
              font-size: 20px;
              color: white;
              border-top: 1px solid white;
              padding-top: 15px;
              font-family: Raleway;
              a {
                text-decoration: none;
                color: white;
              }
            }
          }
        }
        .row-nav {
          display: grid;
          grid-template-columns: 1fr;
          height: 100%;
          align-items: end;
          text-align: right;
          ul {
            list-style: none;
            //background: #008aa6;
            padding: 0px;
            margin: 0px;
            li {
              display: inline-block;
              margin-right: 8px;
              text-align: center;
              cursor: pointer;
              font-size: 1em;
              font-family: Open Sans;
              font-weight: 100;
              transition: all 0.25s ease-in;
              height: 30px;
              color: white;
              padding-top: 8px;
              padding-left: 8px;
              padding-right: 8px;
              border: 2px solid transparent;
              &:hover {
                border: 2px solid white;
              }
            }
          }
        }
      }
    }
  }

  .header-black {
    background-color: black;
    transition: all 0.25s;
    @extend .appear;
    .row-nav {
      align-items: end !important;
    }
  }

  @media (max-width: 1024px) {
    .header-container {
      grid-template-columns: 1fr;
      .header-content {
        width: 100%;
        grid-area: 1/1;
      }
    }
  }

  @media (max-width: 768px) {
    .header-container {
      background-color: black;
      transition: all 0.25s;
      grid-template-columns: 1fr;
      .row-nav {
        display: none !important;
      }
      .header-content {
        grid-template-columns: 0.25fr 1fr;
        .toggle-options {
          display: block;
        }
        .wrap-options {
          grid-template-columns: 1fr;
        }
      }
    }
  }

  @media (max-width: 768px-l) {
    .header-content {
      .wrap-options {
        .wrap-slogan {
          padding-top: 10px;
          .title {
            font-size: 45px;
          }
          .subtitle {
            font-size: 25px;
          }
        }
      }
      .wrap-logo {
        width: 115px !important;
        background-size: 90px !important;
      }
    }
  }
`;
