import React from "react";

import { useSiteMetadata } from "@/hooks";

import { Author } from "./Author";

import * as styles from "./Sidebar.module.scss";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>
        <Author author={author} isIndex={isIndex} />
      </div>
    </div>
  );
};

export default Sidebar;
