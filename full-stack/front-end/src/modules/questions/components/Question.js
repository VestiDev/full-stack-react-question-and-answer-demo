import { Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { deleteQuestion } from "../requests/deleteQuestion";
import { Answers } from "./Answers";
import { Upvotes } from "./Upvotes";
import { fetchQuestion } from "../requests/fetchQuestion";
import { useEffect, useState } from "react";

const getQuestion = (questionId) => (state) => {
  return state.questions.items[questionId];
}

export const Question = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { questionId } = params;
  const question = useSelector(getQuestion(questionId));
  const navigate = useNavigate();
  const [initialized, setInitialization] = useState(false);

  useEffect(() => {
    if (initialized) return false;
    dispatch(fetchQuestion(questionId));
    setInitialization(true);
  }, [dispatch, initialized, setInitialization, questionId]);

  if (!question) {
    return (
      <Container>
        <h2>That question doesn't exist.</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h1">{question.text}</Typography>
      <Upvotes question={question} />
      <Button
        onClick={() => {
          dispatch(deleteQuestion(question.id));
          navigate('/');
        }}
      >
        Delete
      </Button>
      <hr  />
      <Answers questionId={question.id} />
    </Container>
  );
}
