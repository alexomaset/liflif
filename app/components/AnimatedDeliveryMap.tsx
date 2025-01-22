"use client";

import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface DeliveryRoute {
  start: Point;
  end: Point;
  progress: number;
  speed: number;
  isPickup: boolean;
  vehicle: DeliveryVehicle;
}

interface DeliveryVehicle {
  x: number;
  y: number;
  angle: number;
  size: number;
  type: 'truck' | 'bike' | 'car';
}

interface DeliveryHotspot {
  x: number;
  y: number;
  radius: number;
  pulsePhase: number;
  type: 'pickup' | 'dropoff';
}

const AnimatedDeliveryMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Map properties
    const gridSize = 40;
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    const deliveryRoutes: DeliveryRoute[] = [];
    const hotspots: DeliveryHotspot[] = [];
    
    // Create grid lines
    const createGrid = () => {
      const rows = Math.ceil(canvas.height / gridSize);
      const cols = Math.ceil(canvas.width / gridSize);
      
      for (let i = 0; i < rows; i++) {
        lines.push({
          x1: 0,
          y1: i * gridSize,
          x2: canvas.width,
          y2: i * gridSize,
        });
      }
      
      for (let i = 0; i < cols; i++) {
        lines.push({
          x1: i * gridSize,
          y1: 0,
          x2: i * gridSize,
          y2: canvas.height,
        });
      }
    };
    
    // Create delivery hotspots
    const createHotspot = (type: 'pickup' | 'dropoff'): DeliveryHotspot => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 8,
        pulsePhase: Math.random() * Math.PI * 2,
        type,
      };
    };
    
    // Create new delivery route
    const createDeliveryRoute = (): DeliveryRoute => {
      const vehicleTypes: ('truck' | 'bike' | 'car')[] = ['truck', 'bike', 'car'];
      const vehicle: DeliveryVehicle = {
        x: 0,
        y: 0,
        angle: 0,
        size: Math.random() * 2 + 3,
        type: vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)],
      };
      
      const start = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      };
      
      const end = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      };
      
      return {
        start,
        end,
        progress: 0,
        speed: Math.random() * 0.005 + 0.002,
        isPickup: Math.random() > 0.5,
        vehicle: {
          ...vehicle,
          x: start.x,
          y: start.y,
        },
      };
    };
    
    // Draw vehicle
    const drawVehicle = (ctx: CanvasRenderingContext2D, vehicle: DeliveryVehicle) => {
      ctx.save();
      ctx.translate(vehicle.x, vehicle.y);
      ctx.rotate(vehicle.angle);
      
      const color = vehicle.type === 'truck' ? '#00c8ff' : 
                    vehicle.type === 'bike' ? '#00ff9d' : '#ffd700';
      
      ctx.fillStyle = color;
      
      // Draw different shapes based on vehicle type
      if (vehicle.type === 'truck') {
        ctx.fillRect(-vehicle.size * 1.5, -vehicle.size, vehicle.size * 3, vehicle.size * 2);
      } else if (vehicle.type === 'bike') {
        ctx.beginPath();
        ctx.arc(0, 0, vehicle.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(vehicle.size * 2, 0);
        ctx.lineTo(-vehicle.size, vehicle.size);
        ctx.lineTo(-vehicle.size, -vehicle.size);
        ctx.closePath();
        ctx.fill();
      }
      
      ctx.restore();
    };
    
    // Draw hotspot
    const drawHotspot = (ctx: CanvasRenderingContext2D, hotspot: DeliveryHotspot) => {
      const pulseSize = Math.sin(hotspot.pulsePhase) * 2 + 3;
      const color = hotspot.type === 'pickup' ? '#00ff9d' : '#ff6b6b';
      
      // Draw pulse circle
      ctx.beginPath();
      ctx.arc(hotspot.x, hotspot.y, hotspot.radius + pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = `${color}33`;
      ctx.fill();
      
      // Draw center point
      ctx.beginPath();
      ctx.arc(hotspot.x, hotspot.y, hotspot.radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };
    
    // Initialize
    createGrid();
    
    // Add initial hotspots
    for (let i = 0; i < 5; i++) {
      hotspots.push(createHotspot('pickup'));
      hotspots.push(createHotspot('dropoff'));
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });
      
      // Update and draw hotspots
      hotspots.forEach(hotspot => {
        hotspot.pulsePhase += 0.05;
        drawHotspot(ctx, hotspot);
      });
      
      // Add new delivery routes randomly
      if (deliveryRoutes.length < 15 && Math.random() < 0.02) {
        deliveryRoutes.push(createDeliveryRoute());
      }
      
      // Update and draw delivery routes
      deliveryRoutes.forEach((route, index) => {
        route.progress += route.speed;
        
        if (route.progress >= 1) {
          deliveryRoutes.splice(index, 1);
          return;
        }
        
        // Update vehicle position
        const dx = route.end.x - route.start.x;
        const dy = route.end.y - route.start.y;
        route.vehicle.x = route.start.x + dx * route.progress;
        route.vehicle.y = route.start.y + dy * route.progress;
        route.vehicle.angle = Math.atan2(dy, dx);
        
        // Draw route path
        ctx.beginPath();
        ctx.strokeStyle = route.isPickup ? 'rgba(0, 255, 157, 0.3)' : 'rgba(255, 107, 107, 0.3)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(route.start.x, route.start.y);
        ctx.lineTo(route.end.x, route.end.y);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Draw vehicle
        drawVehicle(ctx, route.vehicle);
        
        // Draw progress indicator
        const progressX = route.start.x + dx * route.progress;
        const progressY = route.start.y + dy * route.progress;
        ctx.beginPath();
        ctx.arc(progressX, progressY, 4, 0, Math.PI * 2);
        ctx.fillStyle = route.isPickup ? '#00ff9d' : '#ff6b6b';
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'rgba(0, 0, 0, 0.85)' }}
    />
  );
};

export default AnimatedDeliveryMap;