import axios from 'axios';
import { stack as Menu } from 'react-burger-menu';
import useSWR from 'swr';
import React from 'react'

const MobileMenu = () => {
  const { data: menu } = useSWR("menu", async () => {
    const { data } = await axios.get("https://9yh32oszy9.execute-api.ap-south-1.amazonaws.com/p1/love");
    return data;
  });

  const items = menu ? menu.Items[0].items["L"].map(item => {
    const url = item.M.link.S;
    const text = item.M.text.S;

    return { url, text };
  }) : [];
  return (
    <Menu>
      {(items || []).map(a => (
        <a className="menu-item" href={a.url}>{a.text}</a>
      ))}
    </Menu>
  )
}

export default MobileMenu;