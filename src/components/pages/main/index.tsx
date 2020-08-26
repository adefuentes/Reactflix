import * as React from "react";
import './style.scss';
import * as vars from '../../../lib/var';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import * as MoviesActions from '../../../redux/actions/movies';
import * as MyListActions from '../../../redux/actions/myList';
import * as ContentActions from '../../../redux/actions/content';
import {DefaultState} from "../../../redux/reducers";
import {MoviesDefaultState} from "../../../redux/reducers/movies";
import {InitPage} from "../init";
import {Grid} from "@material-ui/core";
import {MovieInListType} from "../../../api/types/movies";
import {useState} from "react";
import {IoIosPlay, IoMdAdd, IoIosCheckmark} from 'react-icons/io';
import {HeaderContent} from "../../common/header-content";
import {ContentRow} from "../../common/content-row";

// FAKE DE SECCIONES
const sections = [
  'Acción',
  'Aventura',
  'Comedia',
  'Terror'
];

export function MainPage() {

  //TODO: Añadir drag & drop a las listas

  const dispatch = useDispatch();
  const history = useHistory();
  const moviesSelector = useSelector<DefaultState, MoviesDefaultState>(state => state.movies);
  const myList = useSelector<DefaultState, Array<number>>(state => state.myList.myList);
  const [opacity, setOpacity] = useState(1);
  const mainRef = React.createRef<HTMLDivElement>();

  if (!moviesSelector.fetched && !moviesSelector.isFetching) {
    dispatch(MoviesActions.getList());
  }

  if (moviesSelector.isFetching) {
    return (
      <InitPage />
    );
  }

  const openContent = (id: number) => {
    dispatch(ContentActions.reset());
    history.push(`/content/${id}`);
  }

  const isInMyList = (id: number): boolean => {
    if (moviesSelector.fetched) {
      let exists = false;
      myList.forEach((movie) => {
        if (movie === id) {
          exists =  true;
        }
      });
      return exists;
    }
    return false;
  }

  const _onWheel = (e: any) => {
    mainRef.current?.scrollTo({
      top: (mainRef.current.scrollTop ?? 0) + e.deltaY
    });
  }

  const _onScroll = (e: any) => {
    let offset = e.target.scrollTop;
    let wHeight = window.outerHeight;
    setOpacity(1 - (offset / wHeight));
  };

  const getMyList: () => Array<MovieInListType> = () => {
    return moviesSelector.movies.filter((movie,i) => {
      let finded = false;
      myList.forEach((id) => {
        if (id === movie.id) {
          finded = true;
        }
      });
      return finded ? movie : null;
    });
  }

  let initialMovie: MovieInListType | undefined;

  if (moviesSelector.fetched) {
    initialMovie = moviesSelector.movies[8];
  }

  return (
    <div
      ref={mainRef}
      className="Main-Container"
      onScroll={_onScroll}>
      <nav className="Navigator">
        <div className="Nav-Block">
          <p className="Nav-Title">Reactflix</p>
        </div>
        <div className="Nav-Block">
          <button className="Nav-Option Active">Inicio</button>
          <button className="Nav-Option">Series</button>
          <button className="Nav-Option">Películas</button>
          <button className="Nav-Option">Próximamente</button>
        </div>
        <div className="Nav-Block">
          <button className="Nav-Option">Mi Perfil</button>
        </div>
      </nav>
      {
        moviesSelector.fetched ? (
          <>
          <HeaderContent
            onWheel={_onWheel}
            movie={initialMovie as MovieInListType}
            opacity={opacity}
            onPrincialClick={() => {
              openContent((initialMovie as MovieInListType).id)
            }}
            onSecondaryClick={() => {
              isInMyList((initialMovie as MovieInListType).id) ? (
                dispatch(MyListActions.remove((initialMovie as MovieInListType).id))
              ) : (
                dispatch(MyListActions.add((initialMovie as MovieInListType).id))
              )
            }}
            isInMyList={isInMyList((initialMovie as MovieInListType).id)}
          />
          <Grid
            className="List-Wrapper"
            container
            direction="column"
            spacing={2}
          >
            <Grid item md={12} style={{
              overflowY: 'visible'
            }}>
              <p className="Category-Title">Novedades</p>
              <div className="Category-Row">
              {
                moviesSelector.movies.map((movie,i) => {
                  return (
                    <div
                      key={`New-${i}`}
                      className="Vertical-Poster">
                      <div className="Relative-layout">
                        <img
                          onClick={() => {
                            openContent(movie.id);
                          }}
                          src={`${vars.URI_IMG}w300${movie.poster_path}`}
                          alt={movie.title}
                        />
                        <div className="Back-face">
                          <button
                            onClick={() => {
                              openContent(movie.id);
                            }}
                            className="Function-Button">
                              <IoIosPlay size={36}/>
                          </button>
                          <button
                            onClick={() => {
                              isInMyList(movie.id) ? (
                                dispatch(MyListActions.remove(movie.id))
                              ) : (
                                dispatch(MyListActions.add(movie.id))
                              );
                            }}
                            className="Function-Button">
                            {
                              isInMyList(movie.id) ? (
                                <IoIosCheckmark size={48}/>
                              ) : (
                                <IoMdAdd size={36}/>
                              )
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
              </div>
            </Grid>
            {
              myList.length > 0 ? (
                  <ContentRow
                    title='Mi lista'
                    type='H'
                    onItemSelected={(movie) => {
                      openContent(movie.id);
                    }}
                    data={getMyList()}
                  />
              ) : null
            }
            {
              sections.map((section, i) => {
                return (
                  <ContentRow
                    key={`Section-${i}`}
                    title={section}
                    type='H'
                    data={moviesSelector.movies.slice((i*4), (i*4)+6)}
                    onItemSelected={(movie: MovieInListType) => {
                      openContent(movie.id);
                    }}
                  />
                );
              })
            }
          </Grid>
          </>
        ) : null
      }
    </div>
  )
}
