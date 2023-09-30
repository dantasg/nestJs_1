import { Injectable, ConsoleLogger } from '@nestjs/common';

import { createLogger, format, transports } from 'winston';

@Injectable()
export class LoggerService extends ConsoleLogger {
  //
  private formatDefault = format.combine(
    format.simple(),
    format.timestamp(),
    format.printf(
      info => `[${info.timestamp}] ${info.level} - ${info.message}`,
    ),
  );

  error(message: string) {
    const logger = createLogger({
      format: this.formatDefault,
      transports: [
        new transports.Console(), // Log para o console
        new transports.File({ filename: './logs/error.log', level: 'error' }), // Log de erros em arquivo
      ],
    });

    logger.error(message);
  }

  info(message: string) {
    const logger = createLogger({
      format: this.formatDefault,
      transports: [
        new transports.Console(), // Log para o console
        new transports.File({ filename: './logs/info.log', level: 'info' }), // Log de erros em arquivo
      ],
    });

    logger.info(message);
  }

  customLog(content: string) {
    const logger = createLogger({
      format: this.formatDefault,
      transports: [
        new transports.Console(), // Log para o console
        new transports.File({
          filename: './logs/default.log',
          level: 'verbose',
        }),
      ],
    });

    logger.verbose('==============');
    logger.verbose(content);
    this.log('==============');
    this.log(content);
    this.log('==============');
  }

  createdLog(content: CreatedLog) {
    const logger = createLogger({
      format: this.formatDefault,
      transports: [
        new transports.Console(), // Log para o console
        new transports.File({
          filename: './logs/createdLog.log',
          level: 'verbose',
        }),
      ],
    });

    const message: string = `Explanation: ${content.explanation} - UserAlt: ${content.userAlt} - IdCreated: ${content.idCreated}`;

    logger.verbose('==============');
    logger.verbose(message);
    this.log('==============');
    this.log(content.explanation);
    this.log('==============');
  }
}
