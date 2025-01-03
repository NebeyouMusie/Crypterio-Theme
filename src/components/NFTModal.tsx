import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";

interface NFTModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: {
    image: string;
    title: string;
    category: string;
    price: {
      eth: number;
      usd: number;
    };
    description?: string;
  };
}

const NFTModal = ({ isOpen, onClose, nft }: NFTModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-cardBg border-gray-800 text-white max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{nft.title}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square rounded-lg overflow-hidden">
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={nft.image}
              alt={nft.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <p className="text-gray-400">{nft.description || "A unique digital artwork that captures the essence of time through illustrative elements."}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">{nft.category}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Price</h3>
              <div className="flex items-center space-x-4">
                <span className="text-neonGreen text-2xl">{nft.price.eth} ETH</span>
                <span className="text-gray-400">${nft.price.usd}</span>
              </div>
            </div>
            <button className="btn-primary w-full mt-6">Purchase Now</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NFTModal;