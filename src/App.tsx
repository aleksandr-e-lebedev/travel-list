import Logo from '@/components/Logo';
import AddForm from '@/components/AddForm';

export default function App() {
  return (
    <div className="app">
      <Logo />
      <AddForm />
      <div>Packing List</div>
      <footer>Stats</footer>
    </div>
  );
}
