import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div``;

export const ImageContainer = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 50% 0%;
`;
