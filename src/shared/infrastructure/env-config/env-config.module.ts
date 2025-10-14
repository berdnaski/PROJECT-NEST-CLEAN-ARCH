import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import { EnvConfigService } from './env-config.service';
import { join } from 'node:path';

@Module({})
export class EnvConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return {
      module: EnvConfigModule,
      imports: [
        ConfigModule.forRoot({
          ...options,
          envFilePath: [join(__dirname, `../../../../.env.${process.env.NODE_ENV}`)],
          isGlobal: true,
          ...options,
        }),
      ],
      providers: [EnvConfigService],
      exports: [EnvConfigService],
    };
  }
}
