'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { SERVICES, BARBERS, getTimeSlots } from '@/lib/constants';
import Button from '@/components/Button';
import { generateBookingId } from '@/lib/utils';

const bookingSchema = z.object({
  serviceId: z.string().min(1, 'Please select a service'),
  barberId: z.string().min(1, 'Please select a barber'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  customerEmail: z.string().email('Invalid email address'),
  customerPhone: z.string().min(10, 'Phone must be at least 10 characters'),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const timeSlots = getTimeSlots();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      const id = generateBookingId();
      setBookingId(id);
      console.log('Booking submitted:', { ...data, bookingId: id });
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 text-center max-w-md mx-auto"
      >
        <h3 className="text-3xl font-bebas text-green-400 mb-2">Booking Confirmed!</h3>
        <p className="text-gray-300 mb-4">Your appointment has been successfully booked.</p>
        <div className="bg-dark-secondary p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-400 mb-1">Booking ID:</p>
          <p className="font-mono text-primary text-lg break-all">{bookingId}</p>
        </div>
        <p className="text-sm text-gray-400">Check your email for confirmation details.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2">
            Select Service *
          </label>
          <select id="service" {...register('serviceId')} className="w-full">
            <option value="">Choose a service...</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - ${service.price}
              </option>
            ))}
          </select>
          {errors.serviceId && (
            <p className="text-red-400 text-sm mt-1">{errors.serviceId.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="barber" className="block text-sm font-medium mb-2">
            Select Barber *
          </label>
          <select id="barber" {...register('barberId')} className="w-full">
            <option value="">Choose a barber...</option>
            {BARBERS.map((barber) => (
              <option key={barber.id} value={barber.id}>
                {barber.name}
              </option>
            ))}
          </select>
          {errors.barberId && (
            <p className="text-red-400 text-sm mt-1">{errors.barberId.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-2">
            Select Date *
          </label>
          <input type="date" id="date" min={minDate} {...register('date')} className="w-full" />
          {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-2">
            Select Time *
          </label>
          <select id="time" {...register('time')} className="w-full">
            <option value="">Choose a time...</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your full name"
          {...register('customerName')}
          className="w-full"
        />
        {errors.customerName && (
          <p className="text-red-400 text-sm mt-1">{errors.customerName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="your.email@example.com"
            {...register('customerEmail')}
            className="w-full"
          />
          {errors.customerEmail && (
            <p className="text-red-400 text-sm mt-1">{errors.customerEmail.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="(555) 123-4567"
            {...register('customerPhone')}
            className="w-full"
          />
          {errors.customerPhone && (
            <p className="text-red-400 text-sm mt-1">{errors.customerPhone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          id="notes"
          placeholder="Any special requests or notes..."
          rows={3}
          {...register('notes')}
          className="w-full resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        onClick={handleSubmit(onSubmit)}
      >
        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
      </Button>
    </form>
  );
};

export default BookingForm;
