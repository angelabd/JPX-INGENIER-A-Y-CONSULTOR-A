import React from 'react';
import { Monitor, Smartphone, Maximize2, FileText } from 'lucide-react';

export type ViewportMode = 'desktop' | 'mobile' | 'fluid';

interface DeviceSimulatorBarProps {
  mode: ViewportMode;
  onModeChange: (mode: ViewportMode) => void;
  onOpenDesignProcess: () => void;
}

export const DeviceSimulatorBar: React.FC<DeviceSimulatorBarProps> = ({
  mode,
  onModeChange,
  onOpenDesignProcess,
}) => {
  return (
    <div
      style={{ backgroundColor: '#0F2D44' }}
      className="text-white text-xs border-b border-white/10 sticky top-0 z-50 px-4 py-2 flex flex-wrap items-center justify-between gap-3 shadow-md"
    >
      {/* Brand & Project indicator */}
      <div className="flex items-center gap-2">
        <span
          style={{ backgroundColor: '#0A7944' }}
          className="inline-flex items-center justify-center w-5 h-5 rounded text-white font-bold text-[10px] shadow-xs"
        >
          JPX
        </span>
        <span className="font-semibold text-slate-100 hidden sm:inline">
          JPX Ingeniería &amp; Consultoría
        </span>
        <span className="text-slate-400 hidden md:inline">·</span>
        <span className="text-emerald-300 hidden md:inline font-mono text-[11px]">
          Pantone 7725 C / 2965 C / 7683 C
        </span>
      </div>

      {/* Viewport switch controls */}
      <div className="flex items-center gap-1 bg-black/30 p-0.5 rounded-lg border border-white/10">
        <button
          onClick={() => onModeChange('desktop')}
          style={mode === 'desktop' ? { backgroundColor: '#0A7944', color: '#ffffff' } : {}}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap cursor-pointer ${
            mode === 'desktop'
              ? 'shadow-sm font-semibold'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          title="Vista Desktop simulada (1440px de ancho)"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Desktop 1440px</span>
        </button>

        <button
          onClick={() => onModeChange('mobile')}
          style={mode === 'mobile' ? { backgroundColor: '#0A7944', color: '#ffffff' } : {}}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap cursor-pointer ${
            mode === 'mobile'
              ? 'shadow-sm font-semibold'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          title="Vista Mobile simulada (390px iPhone/Android)"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile 390px</span>
        </button>

        <button
          onClick={() => onModeChange('fluid')}
          style={mode === 'fluid' ? { backgroundColor: '#0A7944', color: '#ffffff' } : {}}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium whitespace-nowrap cursor-pointer ${
            mode === 'fluid'
              ? 'shadow-sm font-semibold'
              : 'text-slate-300 hover:text-white hover:bg-white/10'
          }`}
          title="Modo pantalla completa fluida"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Fluido (100%)</span>
          <span className="sm:hidden">Full</span>
        </button>
      </div>

      {/* Design Process Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenDesignProcess}
          style={{ borderColor: 'rgba(10, 121, 68, 0.4)' }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-emerald-400 hover:text-emerald-300 border font-medium transition-colors cursor-pointer whitespace-nowrap"
        >
          <FileText className="w-3.5 h-3.5 text-emerald-400" />
          <span>Memoria de Diseño UI/UX &amp; Pantone</span>
        </button>
      </div>
    </div>
  );
};
