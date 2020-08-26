import * as React from 'react';
import './style.scss';
import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as ContentActions from '../../../redux/actions/content';
import {DefaultState} from "../../../redux/reducers";
import {ContentDefaultState} from "../../../redux/reducers/content";
import {InitPage} from "../init";
import {HeaderContent} from "../../common/header-content";
import {ContentModel} from "../../../api/types/content";
import {IoIosClose} from 'react-icons/io';
import {Grid} from "@material-ui/core";
import {ContentRow} from "../../common/content-row";
import {MovieInListType} from "../../../api/types/movies";

export const ContentPage = () => {
  const params = useParams<{id: string}>();
  const dispatch = useDispatch();
  const history = useHistory();
  const contentSelector = useSelector<DefaultState, ContentDefaultState>(state => state.content);
  if (!contentSelector.isFetching && !contentSelector.fetched) {
    dispatch(ContentActions.request(params.id));
  }

  if (contentSelector.isFetching) {
    return <InitPage />;
  }

  return (
    <div className="Content-Container">
      {
        contentSelector.fetched ? (
          <>
            <nav className='Content-Navigation'>
              <div>
                <p className='Navigation-Logo'>Reactflix</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    history.goBack();
                  }}
                  className='Navigation-Close'
                >
                  <IoIosClose size={48}/>
                </button>
              </div>
            </nav>
            <HeaderContent
              movie={contentSelector.movie as ContentModel}
              opacity={1}
              extraStyle={{
                position: 'relative'
              }}
              isInMyList={false}
            />
            {
              (contentSelector.movie as ContentModel).related_content.length > 0 ? (
                <Grid
                  container
                  className="Related-Wrapper"
                >
                  <ContentRow
                    type='H'
                    title='Contenido relacionado'
                    data={contentSelector.movie?.related_content as MovieInListType[]}
                  />
                </Grid>
              ) : null
            }
          </>
        ) : null
      }
    </div>
  );
}
