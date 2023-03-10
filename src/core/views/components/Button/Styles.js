import styled from "styled-components";

export const Container = styled.div`
  .show {
    display: block;
  }

  .noButton {
    span {
      margin: 0px !important;
    }
  }

  .btn-cancel {
    border: 1px solid $error;
    color: $error;
    &:hover {
      border-color: $error;
      background: $error;
      color: white;
    }
    &:focus {
      border-color: $error;
      background: $error;
      color: white;
    }
  }

  .btn-reset {
    border: 1px solid #607d8b;
    color: #607d8b;
    &:hover {
      border-color: #607d8b;
      background: #607d8b;
      color: white;
    }
    &:focus {
      border-color: #607d8b;
      background: #607d8b;
      color: white;
    }
  }

  .btn-warning {
    border: 1px solid $warning;
    color: $warning;
    &:hover {
      border-color: $warning;
      background: $warning;
      color: white;
    }
    &:focus {
      border-color: $warning;
      background: $warning;
      color: white;
    }
  }

  .btn-fail {
    border-color: $error !important;
    transition: all 0.25s;
  }

  .btn-loader {
    border-color: silver !important;
    transition: all 0.25s;
  }

  .container-loader {
    width: 100%;
    background: white;
    height: 100%;
    text-align: center;
    border-radius: 3px;
    small {
      display: inline-block;
      color: red;
      font-size: 13px;
    }
    .fail-label {
      color: $error;
      display: inline-block;
      vertical-align: middle;
      margin-left: 0px;
    }
    .fail {
      color: $error;
      font-size: 24px;
      vertical-align: top;
      float: none;
      margin-top: 2px;
      margin-right: 0px;
      vertical-align: middle;
    }
  }

  .btn-loadmore {
    border: 1px solid $orange;
    color: $orange;
    &:hover {
      border-color: $orange;
      background: $orange;
      color: white;
    }
    &:focus {
      border-color: $orange;
      background: $orange;
      color: white;
    }
  }

  .btn-load {
    .container-loader {
      border: 1px solid $primary;
      background-image: url("/../../../images/loader.gif");
      background-size: 80px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .btn-confirm,
  .btn-list,
  .btn-list-add,
  .btn-add {
    border: 1px solid $primary;
    color: $primary;
    &:hover {
      border-color: $primary_hover;
      background: $primary_hover;
      color: white;
    }
    &:focus {
      border-color: $primary_hover;
      background: $primary_hover;
      color: white;
    }
  }

  .btn-confirm:disabled {
    opacity: 0.8;
    &:hover {
      color: $primary;
      background: none !important;
    }
    &:focus {
      color: $primary;
      background: none !important;
    }
  }

  .btn-loadmore:disabled {
    opacity: 0.8;
    &:hover {
      color: $orange;
      background: none !important;
    }
    &:focus {
      color: $orange;
      background: none !important;
    }
  }

  .btn-cancel:disabled {
    opacity: 0.8;
    &:hover {
      color: $error;
      background: none !important;
    }
    &:focus {
      color: $error;
      background: none !important;
    }
  }

  .btn {
    width: 100%;
    cursor: pointer;
    transition: all 0.25s;
    outline: none;
    height: 50px;
    border-radius: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
    span {
      font-family: "Raleway";
      font-weight: bold;
      margin-left: 20px;
    }
    i {
      float: right;
      margin-right: 20px;
    }
    i,
    span {
      font-style: normal;
      vertical-align: middle;
      font-size: 23px;
    }
  }

  .btn-search,
  .btn-send {
    width: 20px;
    height: 20px;
    display: inline-block;
    color: $primary;
    vertical-align: top;
    outline: none;
    transition: all 0.25s;
    cursor: pointer;
    i {
      float: none !important;
    }
    &:hover {
      color: $primary_hover;
    }
    &:focus {
      color: $primary_hover;
    }
  }
`;
