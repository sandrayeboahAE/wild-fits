import { Button, Flex, Grid, Stack, Text } from "@mantine/core";
import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandTiktok,
  TbBrandTwitter,
} from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="">
      <Flex align="center" justify="space-around" className="bg-slate-400 p-10">
        <Flex justify="center" align="flex-start" direction="column" gap="md">
          <Text fz="lg" fw="800" c="dark">
            NEWSLETTER
          </Text>
          <Text>
            For Early bird Discounts and Special Offers, Sign up for our
            Newsletter
          </Text>
          <button className="bg-gray-800 text-white p-4 rounded">
            Subscribe Now!
          </button>
          <Text fz="md" fw="800" c="dark">
            Let us Connect On Social Media
          </Text>
          <Flex gap="md" justify="flex-start" align="center" direction="row">
            <div className="text-lg">
              <Link href="#">
                <TbBrandFacebook />
              </Link>
            </div>
            <div className="text-lg">
              <Link href="#">
                <TbBrandInstagram />
              </Link>
            </div>
            <div className="text-lg">
              <Link href="#">
                <TbBrandYoutube />
              </Link>
            </div>
            <div className="text-lg">
              <Link href="#">
                <TbBrandTiktok />
              </Link>
            </div>
            <div className="text-lg">
              <Link href="#">
                <TbBrandTwitter />
              </Link>
            </div>
          </Flex>
          <Text>
            Follow us on your favorite platforms. Check out new launch teasers,
            <br /> how-to videos, and share your favorite looks.
          </Text>
        </Flex>
        <Flex align="center" justify="center" gap="lg">
          <Flex
            gap="lg"
            justify="center"
            align="flex-start"
            direction="column"
            className="px-4"
          >
            <Text fz="lg" fw="700" c="dark">
              SHOP
            </Text>
            <Link href="#">Dresses</Link>
            <Link href="#">Shoes</Link>
            <Link href="#">Bags</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">Distributorship</Link>
          </Flex>
          <Flex
            gap="lg"
            justify="center"
            align="flex-start"
            direction="column"
            className="px-4"
          >
            <Text fz="lg" fw="700" c="dark">
              HELP
            </Text>
            <Link href="#">Contact Us</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Return Policies</Link>
            <Link href="#">Terms and Conditions</Link>
          </Flex>
          <Flex
            gap="lg"
            justify="center"
            align="flex-start"
            direction="column"
            className="px-4"
          >
            <Text fz="lg" fw="700" c="dark">
              EXPLORE
            </Text>
            <Link href="#">About Us</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Privacy Policies</Link>
            <Link href="#">Payment Details</Link>
            <Link href="#">Shipping Details</Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        align="center"
        justify="center"
        direction="column"
        gap="lg"
        className="bg-black p-20"
      >
        <Text className="text-slate-400" fz="lg" fw="bolder">
          WILDFITS LOGO
        </Text>
        <Text className="text-slate-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Distinctio nemo, magnam voluptatum expedita deleniti ratione?
        </Text>
        <Text className="text-slate-400 text-sm">Copyright 2023</Text>
      </Flex>
    </footer>
  );
};

export default Footer;
