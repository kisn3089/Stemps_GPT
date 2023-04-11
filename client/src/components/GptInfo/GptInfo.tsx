import React from 'react';
import { InfoContainer, SpanContainer, TextSpan } from './styles';
import * as Svg from '../../components/atoms/icon/icon';

const GptInfo = () => {
  return (
    <InfoContainer>
      <Svg.MeLogo />
      <SpanContainer>
        <TextSpan className="strong_font">Try it</TextSpan>
        <TextSpan>Stemps GPT</TextSpan>
      </SpanContainer>
    </InfoContainer>
  );
};

export default React.memo(GptInfo);
