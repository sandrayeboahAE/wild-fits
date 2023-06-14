import { Button, Divider, Flex, Menu, Stack, Text } from "@mantine/core";
import {
  TbMail,
  TbMapPin,
  TbArrowDown,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandDribbble,
  TbPhoneCall,
} from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-600 text-slate-50 w-full">
      <Flex justify="space-around" align="center">
        <Flex justify="center" align="center" gap="md">
          <div className="flex flex-row items-center gap-1 p-4">
            <TbMail />
            <Link href="#">info@webmail.com</Link>
          </div>
          <div className="flex flex-row items-center gap-1 p-4">
            <TbMapPin />
            <Link href="#">Accra, Ghana</Link>
          </div>
        </Flex>
        <Flex justify="center" align="center" gap="lg">
          <div className="text-lg">
            <Link href="#" className="flex flex-row items-center gap-1 p-4">
              English <TbArrowDown />
            </Link>
          </div>
          <div className="text-lg">
            <Link href="#">
              <TbBrandFacebook />
            </Link>
          </div>
          <div className="text-lg">
            <Link href="#">
              <TbBrandTwitter />
            </Link>
          </div>
          <div className="text-lg">
            <Link href="#">
              <TbBrandInstagram />
            </Link>
          </div>
          <div className="text-lg">
            <Link href="#">
              <TbBrandDribbble />
            </Link>
          </div>
        </Flex>
      </Flex>
      <Divider />
      <Flex justify="space-around" align="center" gap="lg">
        <Flex justify="center" align="center" gap="lg">
          <div>
            <Text className="text-slate-50 text-xl">WILDFITS LOGO</Text>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-row justify-center items-center g-3">
            <div>
              <TbPhoneCall size={"2rem"} />
            </div>
            <div className="flex flex-col justify-center items-start g-3">
              <Text>Get Support</Text>
              <Link href="#">+233 (0) 543672945</Link>
            </div>
          </div>
        </Flex>
        <Flex justify="space-around" align="center">
          <Link href="/">HOME</Link>

          <Menu shadow="md" width={200} trigger="hover">
            <Menu.Target>
              <Button className="m-2">ABOUT</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>About</Menu.Label>
              <Menu.Item>Services</Menu.Item>
              <Menu.Item>Service Details</Menu.Item>
              <Menu.Item>Location</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu shadow="md" width={200} trigger="hover">
            <Menu.Target>
              <Button>PAGES</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Pages</Menu.Label>
              <Menu.Item>Cart</Menu.Item>
              <Menu.Item>Whislist</Menu.Item>
              <Menu.Item>Checkout</Menu.Item>
              <Menu.Item>Order Tracking</Menu.Item>
              <Menu.Item>My Acoount</Menu.Item>
              <Menu.Item>Sign In</Menu.Item>
              <Menu.Item>Register</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Menu shadow="md" width={200} trigger="hover">
            <Menu.Target>
              <Button className="m-2">NEWS</Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>News</Menu.Label>
              <Menu.Item>News</Menu.Item>
              <Menu.Item>News Grid</Menu.Item>
              <Menu.Item>News Details</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Link href="/contact">CONTACTS</Link>
          <Button radius="md" size="md" className="m-5 text-sm">
            <Link href="/getappoint">GET APPOINTMENT</Link>
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
