import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`  //css 초기화가 된 component
        ${reset}
        & {
          width:500px;
          background-color: #ededed;
          margin: 50px auto;
          padding:20px 10px;
          border-radius: 20px;
          box-shadow:  41px 41px 82px #c9c9c9,
            -41px -41px 82px #ffffff;
        }
        /* input 기본 스타일 초기화 */
        input {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        
        /* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
        input::-ms-clear { display: none; }
        
        /* input type number 에서 화살표 제거 */
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        
        #chatt{
          width: 50%;
          margin: 0 auto;
          #title{
            font-size: 30pt;
            text-align: center;
            margin-bottom: 20px;
          }
        
          #talk{
            width: 100%;
            height: 400px;
            overflow-y: auto;
            border-radius: 18px;
            position: relative;
        
            .talk-shadow{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
        
            div{
              width: 60%;
              display: block;
              padding: 10px;
              border-radius:10px;
              box-sizing: border-box;
        
              &.me{
                background-color : #ffc;
                margin : 0px 0px 20px 40%;
              }
        
              &.other{
                margin : 20px 0px 2px 0;
              }
            }
          }
        
          #name{
            display: block;
            border: 1px solid #dcdcdc;
            background-color: #EDEDED;
            padding:5px 2px;
            margin-top: 20px;
          }
        
          #sendZone{
            > * {vertical-align: top;}
            margin-top: 10px;
            $sendZone-H : 70px;
            display: flex;
        
            #msg{
              width: 90%;
              height: $sendZone-H;
              display: block;
              resize: none;
              border: 1px solid #dcdcdc;
              background-color: #fff;
              box-sizing: border-box;
            }
            #btnSend{
              width: 10%;
              height: $sendZone-H;
              border: 1px solid #dcdcdc;
            }
          }
        }

      `;

export default GlobalStyle;
