SELECT nombreCurso, alum.nombre, prof.nombre FROM cursos
    INNER JOIN alumnos alum
    ON cursos.idCurso = alum.idCurso
    INNER JOIN curso_profesor
    ON cursos.idCurso = curso_profesor.idCurso
    LEFT JOIN profesores prof
    ON curso_profesor.idProfesores = prof.idProfesores;