const { default: styled } = require("styled-components")
const { space, layout, color, flexbox } = require("styled-system")



const Box = styled.div`
  ${space};
  ${layout};
  ${color};

  box-sizing: 'border-box';
  min-width:  0;
  `


const Flex = styled(Box)`
display: flex;
    ${flexbox}
  `


export { Box, Flex }