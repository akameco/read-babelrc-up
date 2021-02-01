import { TransformOptions } from '@babel/core'

declare function readBabelrcUp(options?: readBabelrcUp.ReadBabelrcUpOptions): Promise<TransformOptions>;

declare namespace readBabelrcUp {
  interface ReadBabelrcUpOptions {
    cwd: string;
  }

  function sync(options?: ReadBabelrcUpOptions): TransformOptions
}

export = readBabelrcUp;
