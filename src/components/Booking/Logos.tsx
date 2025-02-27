"use client";

import { useEffect, useRef, useState } from "react";

import { CAR_LOGO_WIDTH, CLONE_SETS_COUNT } from "../ui/constants";
import { cn, setCSSVariable } from "../ui/utils";

import { AudiIcon } from "../../images/logo/audi";
import { BMWIcon } from "../../images/logo/bmw";
import { HondaIcon } from "../../images/logo/honda";
import { HyundaiIcon } from "../../images/logo/hyundai";
import { JeepIcon } from "../../images/logo/jeep";
import { KiaIcon } from "../../images/logo/kia";
import { MercedesBenzIcon } from "../../images/logo/mercedes";
import { MiniIcon } from "../../images/logo/mini";
import { NissanIcon } from "../../images/logo/nissan";
import { PorscheIcon } from "../../images/logo/porsche";
import { SubaruIcon } from "../../images/logo/subaru";
import { TeslaIcon } from "../../images/logo/tesla";
import { ToyotaIcon } from "../../images/logo/toyota";
import { VolkswagenIcon } from "../../images/logo/volkswagen";
import { VolvoIcon } from "../../images/logo/volvo";

interface LogoData {
  id: string;
  icon: JSX.Element;
}

const logoIcons: Record<string, JSX.Element> = {
  kia: <KiaIcon style={{ height: "10px", flexShrink: 0 }} />,
  subaru: <SubaruIcon style={{ height: "15px", flexShrink: 0 }} />,
  mini: <MiniIcon style={{ height: "24px", flexShrink: 0 }} />,
  hyundai: <HyundaiIcon style={{ height: "12px", flexShrink: 0 }} />,
  mercedesBenz: <MercedesBenzIcon style={{ height: "24px", flexShrink: 0 }} />,
  toyota: <ToyotaIcon style={{ height: "17px", flexShrink: 0 }} />,
  bmw: <BMWIcon style={{ height: "28px", flexShrink: 0 }} />,
  honda: <HondaIcon style={{ height: "12px", flexShrink: 0 }} />,
  audi: <AudiIcon style={{ height: "21px", flexShrink: 0 }} />,
  volvo: <VolvoIcon style={{ height: "11px", flexShrink: 0 }} />,
  volkswagen: <VolkswagenIcon style={{ height: "25px", flexShrink: 0 }} />,
  porsche: <PorscheIcon style={{ height: "8px", flexShrink: 0 }} />,
  nissan: <NissanIcon style={{ height: "26px", flexShrink: 0 }} />,
  tesla: <TeslaIcon style={{ height: "10px", flexShrink: 0 }} />,
  jeep: <JeepIcon style={{ height: "18px", flexShrink: 0 }} />,
};

const initialLogos: LogoData[] = Object.entries(logoIcons).map(
  ([id, icon]) => ({ id, icon })
);

function createClonedLogos(logos: LogoData[], totalClones: number): LogoData[] {
  return Array.from({ length: totalClones }).flatMap((_, index) =>
    logos.map(({ id, icon }) => ({
      id: `${id}-clone-${index + 1}`,
      icon,
    }))
  );
}

export function LogoSlider() {
  const logosListRef = useRef<HTMLDivElement>(null);
  const [clonedLogos, setClonedLogos] = useState<LogoData[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const logoList = logosListRef.current;

    if (logoList) {
      const totalLogos = initialLogos.length;

      // IMPORTANT: This CSS Variable is used for the animate-slider keyframes
      setCSSVariable(
        "--slider-total-clones",
        (CLONE_SETS_COUNT + 1).toString()
      );

      setCSSVariable("--slider-total-logos", totalLogos.toString());
      setCSSVariable("--slider-logo-width", CAR_LOGO_WIDTH);
      setCSSVariable(
        "--slider-total-logo-width",
        `calc(var(--slider-total-logos) * var(--slider-logo-width) * (var(--slider-total-clones)))`
      );

      setClonedLogos(createClonedLogos(initialLogos, CLONE_SETS_COUNT));
      setIsVisible(true);
    }
  }, []);

  return (
    <div ref={logosListRef} className="animate-slider">
      <div
        className={cn(
          "flex w-[var(--slider-total-logo-width)] items-center grayscale transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        {initialLogos.concat(clonedLogos).map(({ id, icon }) => (
          <div
            key={id}
            className="mx-5 inline-flex w-[var(--slider-logo-width)] items-center justify-center"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
