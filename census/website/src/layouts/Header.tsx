import { Button } from '@/components/controls/button/juicy';
import SiTwitch from '@/components/icons/SiTwitch';
import { useModal } from '@/components/modal/useModal';
import { CreateFromClipModal } from '@/pages/captures/create/CreateFromClipModal';
import { MenuTrigger } from './sidebars/Menu';

export const Header = () => {
  const createFromClipModalProps = useModal();

  return (
    <header className="border-b border-dashed border-alveus border-opacity-50 h-[4rem] pr-4 pt-2 flex items-center justify-between text-alveus-darker font-semibold">
      <CreateFromClipModal {...createFromClipModalProps} />
      <div className="flex items-center divide-x divide-alveus divide-opacity-50 space-x-4">
        <MenuTrigger />
        <div id="breadcrumbs" className="pl-4"></div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="alveus" onClick={() => createFromClipModalProps.open()}>
          <SiTwitch className="text-xl" />
          <span>submit new clip</span>
        </Button>
      </div>
    </header>
  );
};