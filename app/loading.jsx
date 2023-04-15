'use client'
import { Flex } from "@/src/components/StyledLayout";
import { ThreeDots } from "react-loader-spinner";
import styled, { useTheme } from "styled-components";

export default function Loading() {
    const body = () => typeof window !== "undefined" && document.querySelector('html').clientHeight
    const navbar = () => typeof window !== "undefined" && document.getElementById('navbar').clientHeight
    const remainingheight = body() - navbar() - 20
    const theme = useTheme();
    return <Flex justifyContent='center' alignItems='center' height={remainingheight} >
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color={`${theme.text}`}
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </Flex>
}