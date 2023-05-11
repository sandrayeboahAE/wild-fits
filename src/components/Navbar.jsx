import { Divider, Flex, Stack, Text } from "@mantine/core";
import {
  TbMail,
  TbMapPin,
  TbArrowDown,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandDribbble,
} from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <Flex>
        <Flex>
          <div>
            <TbMail />
            <Link href="#">info@webmail.com</Link>
          </div>
          <div>
            <TbMapPin />
            <Text>Accra, Ghana</Text>
          </div>
        </Flex>
        <Flex>
          <Link href="#" trigger="hover" openDelay={100} closeDelay={400}>
            English <TbArrowDown />
          </Link>
          <Link href="#">
            <TbBrandFacebook />
          </Link>
          <Link href="#">
            <TbBrandTwitter />
          </Link>
          <Link href="#">
            <TbBrandInstagram />
          </Link>
          <Link href="#">
            <TbBrandDribbble />
          </Link>
        </Flex>
      </Flex>
      <Divider />
      <div></div>
    </div>
  );
};

export default Navbar;
