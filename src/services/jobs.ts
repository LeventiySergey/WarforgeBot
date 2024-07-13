import cron from 'node-cron';

export type StartJobArgs = {
  hours: number[];
  minutes: number[];
  callback: () => Promise<void> | void;
};

export function startJob(args: StartJobArgs) {
  const { hours, minutes, callback } = args;

  const time = `${minutes.join(',')} ${hours.join(',')} * * *`;

  return cron.schedule(time, async () => {
    console.debug(`Running job`, { minutes, hours });
    await callback();
  });
}
