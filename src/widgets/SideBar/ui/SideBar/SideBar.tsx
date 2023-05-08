import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import { LangSwitcher } from "features/LangSwitcher/ui/LangSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
