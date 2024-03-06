import { DigiCareIconEnum, DigiCareIconsProps, IconSize } from "./interface";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import { useIconsStyle } from "./style";
import clsx from "clsx";
import { Avatar } from "@mui/material";

export const DigiCareIcons = ({
  title,
  size,
  iconFor,
  className,
  style,
}: DigiCareIconsProps) => {
  const { classes } = useIconsStyle();

  const classNames = clsx({
    [classes.defaultIconClass]: true,
    [classes.smallSize]: size && size === IconSize.small,
    [classes.mediumSize]: size && size === IconSize.medium,
    [classes.largeSize]: size && size === IconSize.large,
    [className || ""]: className && className,
  });

  switch (iconFor) {
    case DigiCareIconEnum.feed:
      return (
        <DynamicFeedIcon
          titleAccess={title}
          className={classNames}
          style={style}
        />
      );
    case DigiCareIconEnum.avatar:
      return <Avatar className={classNames} style={style} />;
    default:
      return <RunningWithErrorsIcon />;
  }
};
