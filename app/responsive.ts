import { css } from 'styled-components';
export default function mobile(props:any) {
  return (
    css`
        @media only screen and (max-width:380px) {
            ${props}
        }
    `
  )
}
