import * as vars from "../../../lib/var";
import './style.scss';
import {DefaultButton} from "../default-button";
import {MovieInListType} from "../../../api/types/movies";
import {StrokeButton} from "../stroke-button";
import * as React from "react";
import {ContentModel} from "../../../api/types/content";

type HeaderContent = {
  movie: MovieInListType | ContentModel;
  isInMyList: boolean;
  opacity: number;
  onPrincialClick?: () => void;
  onSecondaryClick?: () => void;
  extraStyle?: {[id:string]: string};
  onWheel?: (e: any) => void;
}

export function HeaderContent({
  movie,
  isInMyList,
  opacity,
  onPrincialClick,
  onSecondaryClick,
  extraStyle,
  onWheel
}: HeaderContent) {
  return (
    <header
      onWheel={onWheel ? (e) => onWheel(e) : undefined}
      className='Header-Backdrop'
      style={{
        backgroundImage: `url(${vars.URI_IMG}original${movie.backdrop_path})`,
        opacity,
        ...extraStyle
      }}
    >
      <div className="Info-Wrapper">
        <p className="Movie-Title">{movie.title}</p>
        <p className="Movie-Date">{movie.release_date}</p>
        <p className="Movie-Overview">{movie.overview}</p>
        <div className="Button-Wrapper">
          <DefaultButton
            onClick={onPrincialClick}
            text="Reproducir"
          />
          <StrokeButton
            onClick={onSecondaryClick}
            text={
              isInMyList ? (
                "Quitar de mi lista"
              ) : (
                "Añadir a mi lista"
              )
            }
          />
        </div>
      </div>
    </header>
  );
}
