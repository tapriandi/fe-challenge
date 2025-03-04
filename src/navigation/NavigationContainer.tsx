import {
  NavigationContainer as ReactNavigationContainer,
  NavigationContainerProps as ReactNavigationContainerProps,
} from '@react-navigation/native';
import * as React from 'react';

export interface NavigationContainerProps
  extends ReactNavigationContainerProps {}

export default function NavigationContainer({
  children,
}: NavigationContainerProps) {
  return <ReactNavigationContainer>{children}</ReactNavigationContainer>;
}
