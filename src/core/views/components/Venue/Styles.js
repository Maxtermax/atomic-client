import styled from "styled-components";

export const Container = styled.div`
  .section-venue {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    width: 1024px;
    max-width: 1440px;
    margin: 0px auto;
    position: relative;
    height: 350px;
    padding-top: 55px;
    padding-bottom: 55px;
    .wrap-venue-map {
      position: relative;
      padding-bottom: 75%; // This is the aspect ratio
      overflow: hidden;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
      }
    }

    .section-venue__article {
      padding: 20px;
      padding-left: 30px;
      .section-venue__article__title {
        font-size: 2em;
        font-family: Raleway;
        padding: 0px;
        margin: 0px;
        display: inline;
        color: black;
        .lower-bar {
          background-color: black;
          margin-top: 10px;
        }
      }
      .section-venue__article__copy {
        font-size: 1em;
        font-family: Open Sans;
        line-height: 1.5;
        color: $black;
      }
    }
  }

  @media (max-width: 1024px) {
    .wrap-venue-map {
      height: 200px;
    }
    .section-venue {
      width: 100%;
      padding: 0px !important;
      height: auto !important;
      grid-template-columns: 1fr;
      .section-venue__article {
        padding-top: 30px !important;
        padding-left: 20px !important;
      }
    }
  }
`;
