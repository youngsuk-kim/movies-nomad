import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    //find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOne(id: string): boolean {
    // +id는 +연산자로 인해 number로 변환된다.
    //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
    //왜? filter를 사용했지 어차피 한개만 가져올건데
    this.movies.filter((movie) => movie.id !== +id);
    return true;
  }

  create(movieData) {
    this.movies.push({
      //length는  배열의 크기를 의미한다.
      id: this.movies.length + 1,
      ...movieData,
    });
  }
}
