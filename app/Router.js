import { createRouter } from '@exponent/ex-navigation';

import ConfirmPhoneScreen from 'screens/ConfirmPhone';
import HouseholdInfoScreen from 'screens/HouseholdInfo';
import HouseholdMemberInfoScreen from 'screens/HouseholdMemberInfo';
import HouseholdMembersScreen from 'screens/HouseholdMembers';
import HouseholdSummaryScreen from 'screens/HouseholdSummary';
import HouseholdVehicleInfoScreen from 'screens/HouseholdVehicleInfo';
import HouseholdVehiclesScreen from 'screens/HouseholdVehicles';
import PhoneEntryScreen from 'screens/PhoneEntry';

export default createRouter(() => ({
  confirmPhoneScreen: () => ConfirmPhoneScreen,
  householdInfoScreen: () => HouseholdInfoScreen,
  householdMemberInfoScreen: () => HouseholdMemberInfoScreen,
  householdMembersScreen: () => HouseholdMembersScreen,
  householdSummaryScreen: () => HouseholdSummaryScreen,
  householdVehicleInfoScreen: () => HouseholdVehicleInfoScreen,
  householdVehiclesScreen: () => HouseholdVehiclesScreen,
  phoneEntryScreen: () => PhoneEntryScreen,
}));
