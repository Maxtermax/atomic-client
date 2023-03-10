import styled from "styled-components";

export const Container = styled.div`
  .wrap-team {
    background: rgb(255, 255, 255);
  }

  .section-team {
    display: grid;
    grid-template-columns: 1fr;
    padding-top: 15px;
    padding-bottom: 0px;
    width: 1024px;
    max-width: 1440px;
    margin: 0px auto;
    position: relative;
    .section-team__article {
      padding: 20px;
      .section-team__article-image {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
      }
      .section-team__article__title {
        font-size: 2em;
        font-family: Raleway;
        padding: 0px;
        margin: 0px;
        display: inline;
        color: rgb(0, 0, 0);
        .lower-bar {
          background-color: rgb(0, 0, 0);
          margin-top: 10px;
        }
      }
      .section-team__article__copy {
        color: rgba(0, 0, 0, 0.5);
        font-size: 1em;
        font-family: Open Sans;
        line-height: 1.5;
      }
      .section-team__article__members {
        padding-top: 20px;
        padding-bottom: 10px;
        .section-team__article__members__wrap-items {
          padding: 0px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 30px;
          .section-team__article__members__wrap-items__image {
            width: 200px;
            height: 200px;
            background: #fff;
            text-align: center;
            margin: 0 auto;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 200px;
          }
          .section-team__article__members__wrap-items__item {
            list-style: none;
            padding: 10px;
            .section-team__article__members__wrap-items__title {
              display: list-item;
              font-size: 20px;
              font-family: "Raleway";
              margin: 15px auto;
              color: rgba(0, 0, 0, 0.5);
              .lower-bar {
                margin-top: 10px;
                background: rgba(0, 0, 0, 0.5) !important;
              }
            }
            .section-team__article__members__wrap-items__copy {
              font-family: Open Sans;
              font-size: 1em;
              text-align: left;
              line-height: 1.4;
              color: rgba(0, 0, 0, 0.5);
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .section-team__article__members__wrap-items {
      grid-template-columns: repeat(2, 1fr) !important;
      grid-gap: 15px !important;
      width: auto !important;
    }
    .section-team {
      width: auto !important;
    }
  }

  @media (max-width: 512px) {
    .section-team__article__members__wrap-items__image {
      width: 150px !important;
      height: 150px !important;
    }
  }

  @media (max-width: 768px-l) {
    .section-team__article__members__wrap-items {
      grid-gap: 0px !important;
    }
    .section-team__article {
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .section-team__article__title {
      padding-left: 10px !important;
      .lower-bar {
        margin-left: 10px;
      }
    }
    .section-team__article__copy {
      padding-left: 10px;
      padding-right: 10px;
      margin: 0px;
      bottom: 15px;
      position: relative;
    }
    .section-team__article__members__wrap-items__image {
      width: 100px !important;
      height: 100px !important;
    }
  }
`;
