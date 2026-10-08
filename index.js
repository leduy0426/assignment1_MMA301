import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent ensures Expo Go & native builds run appropriately
registerRootComponent(App);

// Export default App for Expo Snack compatibility
export default App;
