import type { ImageMetadata } from "astro";
import DagoValleyExploreIcon from "../assets/projects/icons/dago_valley_explore.png";
import DigdayaAuthenticatorIcon from "../assets/projects/icons/digdaya_auth.png";
import InventoryTIPIcon from "../assets/projects/icons/inventory_tip.png";
import KretekAsliIcon from "../assets/projects/icons/kretek_asli.png";
import LayungPeradilanIcon from "../assets/projects/icons/layung_peradilan.png";
import MolectMSAIcon from "../assets/projects/icons/molect_msa.png";
import MolectPijerPodiIcon from "../assets/projects/icons/molect_pijer_podi.png";
import RaharjoIcon from "../assets/projects/icons/raharjo.png";
import MustangIllustration from "../assets/illustrations/mustangs.webp";
import RifleIllustration from "../assets/illustrations/rifle.webp";
import SniperIllustration from "../assets/illustrations/sniper.webp";
import ShieldLogoIllustration from "../assets/illustrations/shield_logo.webp";
import RomanShieldIllustration from "../assets/illustrations/roman_shield.webp";
import RemoteControlIllustration from "../assets/illustrations/remote_control.webp";
import ProspectiveIllustration from "../assets/illustrations/prospective.webp";
import Landscape1Illustration from "../assets/illustrations/landscape_1.webp";
import Landscape2Illustration from "../assets/illustrations/landscape_2.webp";
import StockMarketDownIllustration from "../assets/illustrations/stock_market_down.webp";
import StockMarketUpIllustration from "../assets/illustrations/stock_market_up.webp";
import HouseIllustration from "../assets/illustrations/house.webp";
import BoneLogoExplorationIllustration from "../assets/illustrations/bone_logo_exploration.webp";
import HexElementIllustration from "../assets/illustrations/hex_element.png";
import HexElementIllustration1 from "../assets/illustrations/hex_element_1.png";
import HexElementIllustration2 from "../assets/illustrations/hex_element_2.png";

export interface Illustration {
  src: ImageMetadata;
  alt: string;
}

// Full gallery used on the design-works page
export const illustrationsAll: Illustration[] = [
  { src: MustangIllustration, alt: "Mustangs illustration" },
  { src: HexElementIllustration1, alt: "Hex element 1" },
  { src: SniperIllustration, alt: "Sniper illustration" },
  { src: RifleIllustration, alt: "Rifle illustration" },
  { src: HexElementIllustration2, alt: "Hex element 2" },
  { src: ShieldLogoIllustration, alt: "Shield logo" },
  { src: RomanShieldIllustration, alt: "Roman shield" },
  { src: RemoteControlIllustration, alt: "Remote control" },
  { src: ProspectiveIllustration, alt: "Prospective" },
  { src: Landscape1Illustration, alt: "Landscape 1" },
  { src: Landscape2Illustration, alt: "Landscape 2" },
  { src: StockMarketDownIllustration, alt: "Stock market down" },
  { src: StockMarketUpIllustration, alt: "Stock market up" },
  { src: HouseIllustration, alt: "House" },
  { src: BoneLogoExplorationIllustration, alt: "Bone logo exploration" },
];

// Marquee rows used in the DesignWorksCard home widget
export const illustrationsRow1: Illustration[] = [
  { src: DagoValleyExploreIcon, alt: "mustangs" },
  { src: DigdayaAuthenticatorIcon, alt: "hex element" },
  { src: InventoryTIPIcon, alt: "sniper" },
  { src: KretekAsliIcon, alt: "rifle" },
  { src: LayungPeradilanIcon, alt: "shield logo" },
  { src: MolectMSAIcon, alt: "roman shield" },
  { src: MolectPijerPodiIcon, alt: "remote control" },
];

export const illustrationsRow2: Illustration[] = [
  { src: RaharjoIcon, alt: "prospective" },
  { src: MolectPijerPodiIcon, alt: "landscape 1" },
  { src: MolectMSAIcon, alt: "landscape 2" },
  { src: LayungPeradilanIcon, alt: "stock market down" },
  { src: KretekAsliIcon, alt: "stock market up" },
  { src: InventoryTIPIcon, alt: "house" },
  { src: DigdayaAuthenticatorIcon, alt: "bone logo" },
];
