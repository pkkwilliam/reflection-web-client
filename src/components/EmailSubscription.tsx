import React, { useState } from 'react';

import { useService } from '../hooks/useService';
import { ApplicationModal } from './ApplicationModal';

const EmailSubscription = () => {
  const { subscript } = useService();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [emailMooal, setEmailModal] = useState<{
    message: string;
    show: boolean;
  }>({ message: '', show: false });
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const onClickSubscribe = async () => {
    const startTime = Date.now();
    setLoading(true);
    try {
      await subscript(email);
      const endTime = Date.now();
      const difference = endTime - startTime;
      setTimeout(
        () => {
          setSubscribed(true);
        },
        difference > 900 ? 0 : 900 - difference
      );
    } catch (error: any) {
      setEmailModal({ message: error.message, show: true });
    } finally {
      setLoading(false);
    }
  };

  const buttonText: string = loading
    ? 'Subscribing...'
    : subscribed
      ? 'Subscribed, Thank you!'
      : 'Subscribe';

  return (
    <div id={'emailSubscription'}>
      <ApplicationModal
        content={emailMooal.message}
                        setShow={(show: boolean) => setEmailModal({ ...emailMooal, show })}
                        show={emailMooal.show}
                        title={'Something went wrong...'}
      />
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Stay in the Loop!
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Sign up with your email to get exclusive updates on NoFlee’s progress, exciting features, and launch
                availability.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
                  value={email}
                  onChange={(e) => {
                    if (subscribed) {
                      setSubscribed(false);
                    }
                    setEmail(e.currentTarget.value);
                  }}
                />
                <button
                  disabled={loading || subscribed}
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={onClickSubscribe}
                >
                  {buttonText}
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  {/* <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" /> */}
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Stay Connected
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Receive behind-the-scenes insights, news, and announcements directly in your inbox.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  {/* <HandRaisedIcon aria-hidden="true" className="size-6 text-white" /> */}
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Make an Impact
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Join our mission to make roads safer for everyone—your support drives change.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
