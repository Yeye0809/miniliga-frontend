import type{ LucideIcon } from 'lucide-react';

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface DashboardTab {
  id: string;
  label: string;
}

export type ActionCardColor = 'green' | 'blue' | 'orange' | 'purple';

export interface ActionCardData {
  id: string;
  icon: LucideIcon;
  iconColor: ActionCardColor;
  title: string;
  description: string;
  buttonLabel: string;
  buttonColor: ActionCardColor;
}
