import { Card, Flex, Input, Stack, Text, Textarea } from "@mantine/core";
import Link from "next/link";
import {
  TbCurrentLocation,
  TbMail,
  TbWorld,
  TbPhoneCall,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
  TbBrandTiktok,
  TbBrandTwitter,
} from "react-icons/tb";

const Contact = () => {
  return (
    <div className="">
      <div className="bg-purple-900 flex align-middle justify-center p-20">
        <Text fz="xl" fw="bolder" c="dark">
          Contact Us
        </Text>
      </div>
      <div className="flex align-middle justify-center p-10">
        <Text fz="md" fw="bold" c="dark">
          GET IN TOUCH, LET US START A CONVERSATION
        </Text>
      </div>
      <Flex align="center" justify="center" gap="lg">
        <Stack align="stretch" className="m-5">
          <Input placeholder="Name" size="md" withAsterisk />
          <Input placeholder="Email" size="md" withAsterisk />
          <Input placeholder="Phone" size="md" withAsterisk />
          <Textarea placeholder="Comment" size="xl" withAsterisk />
        </Stack>
        <Stack>
          <Card shadow="sm" className="p-24">
            <Flex align="center" justify="flex-start" gap="md">
              <TbCurrentLocation />
              <Text fz="lg" fw="bold">
                Location
              </Text>
            </Flex>
            <Flex align="center" justify="flex-start" gap="md">
              <TbMail />
              <Text fz="lg" fw="bold">
                mail
              </Text>
            </Flex>
            <Flex align="center" justify="flex-start" gap="md">
              <TbWorld />
              <Text fz="lg" fw="bold">
                website name
              </Text>
            </Flex>
            <Flex align="center" justify="flex-start" gap="md">
              <TbPhoneCall />
              <Text fz="lg" fw="bold">
                phone number
              </Text>
            </Flex>
            <Flex align="center" justify="flex-start" gap="md">
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
          </Card>
        </Stack>
      </Flex>
    </div>
  );
};

export default Contact;
