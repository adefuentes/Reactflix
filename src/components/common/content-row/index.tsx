import * as vars from "../../../lib/var";
import {Grid} from "@material-ui/core";
import * as React from "react";
import {MovieInListType} from "../../../api/types/movies";
import './style.scss';

type ContentRowType = {
  title: string;
  type: string;
  data: MovieInListType[]
  onItemSelected?: (movie: MovieInListType) => void
};

export function ContentRow({
  title,
  type,
  data,
  onItemSelected
}: ContentRowType) {
  return (
    <Grid
      item
      md={12}
      className='Row-Layout'
    >
      <p className="Category-Title">{title}</p>
      <div className="Category-Row">
        {
          data.map((movie, index) => {
            return (
              <div
                onClick={() => onItemSelected ? onItemSelected(movie) : null}
                key={`Content-${index}`}
                className={type === 'H' ? 'Horizontal-Poster' : 'Vertical-Poster'}>
                <img
                  src={`${vars.URI_IMG}${type === 'H' ? 'w300' : 'original'}${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
            );
          })
        }
      </div>
    </Grid>
  );
}
