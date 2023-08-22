import Image from "next/image";
import arrowRight from "../assets/right.svg";
import leftRight from "../assets/left.svg";
import { ArrowContainer, ArrowLeft, ArrowRight } from "@/styles/arrow";

interface IArrowProps {
  next: (e: any) => void;
  prev: (e: any) => void;
  isFirstSlide: boolean;
  left?: boolean
}

export function Arrow({next, prev, isFirstSlide, left}: IArrowProps) {
  return (
    <ArrowContainer>
      <ArrowLeft onClick={prev} disabled={isFirstSlide}>
        <Image src={leftRight} alt="" />
      </ArrowLeft>
      <ArrowRight onClick={next}>
        <Image src={arrowRight} alt=""/>
      </ArrowRight>
    </ArrowContainer>
  );
}
