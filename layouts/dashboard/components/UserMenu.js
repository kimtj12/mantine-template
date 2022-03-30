import { Menu, Divider, Text } from "@mantine/core";
import { Settings, Search, Photo, MessageCircle, Trash, ArrowsLeftRight } from "tabler-icons-react";
import useAuth from "../../../hooks/useAuth";

export default function UserMenu({ control }) {
  const { logout } = useAuth();

  return (
    <Menu control={control} transition="skew-up" placement="end">
      <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
      <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
      <Menu.Item icon={<Photo size={14} />}>Gallery</Menu.Item>
      <Menu.Item
        icon={<Search size={14} />}
        rightSection={
          <Text size="xs" color="dimmed">
            ⌘K
          </Text>
        }
      >
        Search
      </Menu.Item>
      <Divider />
      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item icon={<ArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>,
      <Menu.Item color="red" icon={<Trash size={14} />} onClick={logout}>
        로그아웃
      </Menu.Item>
    </Menu>
  );
}
