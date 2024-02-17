

export interface MenuItemProps {
    icon: string,
    title: string
}

export interface MenuItemsProps extends MenuItemProps {
    children: string[]
}