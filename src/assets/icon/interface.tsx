export interface DigiCareIconsProps {
  iconFor: DigiCareIconEnum
  className?: string
  style?: React.CSSProperties
  title?: string
  size?: IconSize
}

export enum IconSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum DigiCareIconEnum {
  feed = 'feed',
  notifications = 'notifications',
  settings = 'settings',
  profile = 'profile',
  hamburger = 'hamburger',
  avatar = 'avatar',
  about = 'about',
  contact = 'contact',
}

export interface CustomHamburgerIconProps {
  title?: string
  className?: string
  style?: React.CSSProperties
}
