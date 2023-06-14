import {
  Button,
  Checkbox,
  Flex,
  Grid,
  Input,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { IconAt, IconChevronDown } from "@tabler/icons-react";
import { MdPermIdentity } from "react-icons/md";
import { TbMail, TbPhone, TbArrowDown, TbPencil } from "react-icons/tb";
import { useState } from "react";

const GetAppointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="bg-slate-800 p-32">
        <h1 className="text-gray-300 font-bold">SCHEDULE APPOINTMENT</h1>
      </div>
      <div className="flex items-center justify-center">
        <Stack className="w-2/3 p-5 m-10">
          <h2 className="font-bold">Personal Information</h2>
          <div className="grid grid-rows-2 grid-flow-col">
            <div className="grid grid-cols-2">
              <Input
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                rightSection={<MdPermIdentity size="1.5rem" />}
                className="border-gray-700 text-black m-2"
                size="lg"
                radius="sm"
                label="First Name"
              />
              <Input
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                rightSection={<MdPermIdentity size="1.5rem" />}
                className="border-gray-700 text-black m-2"
                size="lg"
                radius="sm"
                label="Last Name"
              />
            </div>
            <div className="grid grid-cols-2">
              <Input
                placeholder="Email address"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                rightSection={<TbMail size="1rem" />}
                className="border-gray-700 text-black m-2"
                size="lg"
                radius="sm"
                label="Email address"
              />
              <Input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                rightSection={<TbPhone size="1rem" />}
                className="border-gray-700 text-black m-2"
                size="lg"
                radius="sm"
                label="Phone Number"
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <Select
              placeholder="Name"
              rightSection={<TbArrowDown size="1rem" />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: "none" } }}
              data={["Name", "Name", "Name", "Name"]}
              className="m-2"
              size="lg"
            />
            <Select
              placeholder="Type of Service"
              rightSection={<TbArrowDown size="1rem" />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: "none" } }}
              data={["Service", "Service", "Service", "Service"]}
              className="m-2"
              size="lg"
            />
            <Select
              placeholder="Year"
              rightSection={<TbArrowDown size="1rem" />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: "none" } }}
              data={["2023", "2024", "2025", "2026"]}
              className="m-2"
              size="lg"
            />
          </div>
          <Flex>
            <Checkbox
              label="I agree to sell my privacy"
              size="sm"
              className="m-2"
            />
          </Flex>
          <div className="grid grid-row-2">
            <h3 className="m-2">What type of service do you need</h3>
            <Textarea
              placeholder="Your comment"
              label="Your comment"
              size="xl"
              withAsterisk
              rightSection={<TbPencil size="1.5rem" />}
              className="border-gray-700 text-black p-3 m-2"
              radius="md"
            />
          </div>
          <div className="grid grid-cols-2">
            <Select
              placeholder="Day"
              rightSection={<TbArrowDown size="1rem" />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: "none" } }}
              data={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
              className="m-2"
              size="lg"
            />
            <Select
              placeholder="Time"
              rightSection={<TbArrowDown size="1rem" />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: "none" } }}
              data={[
                "9:00 - 10:30",
                "11:00 - 12:30",
                "13:00 - 14:30",
                "15:00 - 16:30",
              ]}
              className="m-2"
              size="lg"
            />
          </div>
          <Button
            type="submit"
            className="bg-slate-900 text-gray-300 m-3"
            size="lg"
          >
            SUBMIT NOW
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default GetAppointment;
